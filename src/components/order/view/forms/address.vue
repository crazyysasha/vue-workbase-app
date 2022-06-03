<template>
	<form @submit.prevent.stop="onSubmit">
		<c-search
            v-model="address"
            :items="searchedItems"
            @on-select-item="onSelectItem"
            placeholder="Город, район, улица, дом"
        >
            <template #list-item="{ item }">
                {{ item.getAddressLine() }}
            </template>
        </c-search>
		<yandex-map
            :settings="mapSettings"
            :coords="
                placemark?.length
                    ? placemark
                    : [41.31377189085043, 69.25741676336806]
            "
            :zoom="10"
            init-without-markers
            class="h-96 rounded-md overflow-clip"
            @click="onClickInMap"
            @map-was-initialized="map = $event"
        >
            <div></div>
            <ymap-marker
                markerId="address"
                :coords="placemark"
                v-if="placemark?.length == 2"
            ></ymap-marker>
            <!-- @dragend="onDragEnd"
                :options="{ draggable: true }" -->
        </yandex-map>
		<div class="flex justify-between mt-4">
			<c-button
				type="button"
				scheme="secondary"
				@click="onCancel"
				:loading="isLoading"
				:disabled="isLoading"
			>
				отмена
			</c-button>
			<c-button :loading="isLoading" :disabled="isLoading">
				сохранить
			</c-button>
		</div>
	</form>
</template>
<script setup>
	import useVuelidate from "@vuelidate/core";
	import { helpers, requiredIf, requiredUnless } from "@vuelidate/validators";
	import { reactive, toRefs, unref, watch } from "vue";
	import { yandexMap, ymapMarker, loadYmap } from "vue-yandex-maps";

	const props = defineProps({
		defaultState: {
			type: Object,
		},
		updateHandlers: {
			type: Object,
			required: true,
		},
	});

	const { defaultState, updateHandlers } = toRefs(props);

	const { execute, isLoading, isLoaded, promise } = unref(updateHandlers);

	const emit = defineEmits(["cancel", "success"]);

	watch(defaultState, () => setStateWithDefaults());

	const state = reactive({
		at_executor: false,
		at_customer: false,
		is_online: false,
	});

	const setStateWithDefaults = () => {
		Object.assign(state, {
			at_executor: defaultState.value?.at_executor || false,
			at_customer: defaultState.value?.at_customer || false,
			is_online: defaultState.value?.is_online || false,
		});
	};
	setStateWithDefaults();

	const rules = {
		at_executor: {
			requiredIf: requiredIf(false),
		},
		at_customer: {
			requiredIf: requiredIf(false),
		},
		is_online: {
			requiredUnless: helpers.withMessage(
				"Выберите как минимум одно значение",
				() => state.at_customer || state.at_executor || state.is_online
			),
		},
	};

	const $externalResults = reactive({
		at_executor: [],
		at_customer: [],
		is_online: [],
	});

	watch(
		() => state.at_executor,
		() => {
			Object.assign($externalResults, { at_executor: [] });
		}
	);
	watch(
		() => state.at_customer,
		() => {
			Object.assign($externalResults, { at_customer: [] });
		}
	);
	watch(
		() => state.is_online,
		() => {
			Object.assign($externalResults, { is_online: [] });
		}
	);

	const validator = useVuelidate(rules, state, { $externalResults });

	const onSubmit = async () => {
		if (!(await validator.value.$validate())) return;

		await execute(state)
			.then((order) => emit("success", order))
			.catch(({ type, fields, message }) => {
				if (type == "validation") Object.assign($externalResults, fields);
				else alert(message);
				throw { error, fields, message };
			});
	};

	const onCancel = () => {
		setStateWithDefaults();
		emit("cancel");
	};
</script>
