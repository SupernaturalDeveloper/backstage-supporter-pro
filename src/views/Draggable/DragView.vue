<template>
    <div class="dragBox">
        <Drag style="width: " :list="list1" :config="config1">
            <template v-slot="{ item }">
                <div class="item">
                    {{ item.name }}
                </div>
            </template>
        </Drag>

        <Drag style="width: " :list="list2" :config="config2">
            <template v-slot="{ item }">
                <div class="item">
                    {{ item.name }}
                </div>
            </template>
        </Drag>
    </div>
</template>

<script>
    import Drag from "@/views/Draggable/Drag.vue";

    export default {
        components: {
            Drag,
        },

        data() {
            return {
                list1: new Array(10).fill(0).map((_, i) => ({
                    name: `列表1 - ${i + 1}`,
                    draggable: true,
                })),

                config1: {
                    name: "test",
                    push: true,
                    pull: true,
                    exchange: true,
                },

                list2: new Array(10).fill(0).map((_, i) => ({
                    name: `列表2 - ${i + 1}`,
                    draggable: true,
                })),

                config2: {
                    name: "test",
                    push: true,
                    pull: true,
                    exchange: true,
                },
            };
        },
    };
</script>

<style  scoped>
    .dragBox {
        display: flex;
        justify-content: center;
    }
    .item {
        border: 1px solid #ccc;
        width: 200px;
        height: 30px;
        text-align: center;
    }
</style>
