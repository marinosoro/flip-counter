<template>
    <div class="flip-number" :style="{'--fontSize': fontSize, '--labelSize': labelSize || fontSize}">
        <div class="flip-section">
            <template v-for="(item, index) in numbersSplitted">
                <template v-if="typeof(item)==='number'">
                    <flip-number-item
                        :value="item"
                        :speed="speed"
                        class="loop-item"
                        :key="index"
                        :split="split"
                        :fontSize="fontSize"
                    ></flip-number-item>
                </template>
                <template v-else>
                    <div class="loop-item sign" :key="index">{{item}}</div>
                </template>
            </template>
        </div>
        <div class="label">{{ label }}</div>
    </div>
</template>
<script>

import FlipNumberItem from "./FlipNumberItem.vue";

export default {
    name: 'FlipNumber',
    components: {
        FlipNumberItem
    },
    props: {
        value: {
            type: String,
            required: true,
            default: '0'
        },
        speed: {
            type: [Number, String],
            default: 600
        },
        label: {
            type: String,
            default: null
        },
        split: {
            type: Boolean,
            default: true
        },
        fontSize: {
            type: String,
            default: '1rem'
        },
        labelSize: {
            type: String,
            required: false
        }
    },
    data () {
        let _speed = this.speed * 1
        if (isNaN(_speed)) {
            console.error('the prop speed is not a number')
            _speed = 600
        } else {
            _speed = _speed < 600 ? 600 : _speed
        }
        return {
            numbersSplitted: [],
            interval: _speed
        }
    },
    created () {
        this.splitValue()
    },
    watch: {
        value () {
            this.splitValue()
        }
    },
    methods: {
        splitValue () {
            this.numbersSplitted = []
            if (!this.split) {
                this.numbersSplitted.push(Number(this.value));
                return;
            }
            if (isNaN(Number(this.value))) {
                return console.error('the prop must be a number')
            }
            const valueSplittedArr = this.value.toString().split('')
            for (let i = 0; i < valueSplittedArr.length; i++) {
                let _val = valueSplittedArr[i]
                if (isNaN(Number(_val))) {
                    this.numbersSplitted.push(_val)
                } else {
                    this.numbersSplitted.push(Number(_val))
                }
            }
        }
    }
}
</script>
<style scoped>
.flip-number {
    display: flex;
    flex-direction: column;
}
.flip-section {
    /*height: 70px;*/
    height: calc(var(--fontSize) * 1.4);
    display: flex;
}
.flip-number .label {
    text-align: center;
    font-size: var(--labelSize);
    line-height: 1.5;
    color: #262626;
}
.loop-item {
    display: inline-block;
}
</style>
