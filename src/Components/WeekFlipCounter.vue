<template>
    <div class="flip-counter">
        <FlipNumber
            :value="weeks"
            :speed="600"
            :label="labels.weeks || 'Weeks'"
            :fontSize="fontSize"
            :labelSize="labelSize"
        />
        <FlipNumber
            v-if="includeDays"
            :value="days"
            :speed="600"
            :label="labels.days || 'Days'"
            :fontSize="fontSize"
            :labelSize="labelSize"
        />
    </div>
</template>

<script>
import moment from 'moment';
import momentPreciseRangePlugin from "../Plugins/momentPreciseRangePlugin.js";
import FlipNumber from "../Components/FlipNumber.vue";
momentPreciseRangePlugin(moment);

export default {
    props: {
        date: {
            type: String,
            required: true
        },
        fontSize: {
            type: String,
            default: '1rem'
        },
        labelSize: {
            type: String,
            required: false
        },
        labels: {
            type: Object,
            default: () => {
                return {
                    weeks: 'Weeks',
                    days: 'Days',
                }
            }
        },
        includeDays: {
            type: Boolean,
            default: false
        },
        countToday: {
            type: Boolean,
            default: false
        },
    },
    components: {
        FlipNumber,
    },
    methods: {
        getDateDiff() {
            // The date is an Iso8601 string
            // Get the difference between the current date and the date passed as prop
            // Return the exact difference in years, months, days, hours, minutes and seconds with moment.preciseDiff

            // First, convert the date to a moment object, the date passed as prop is an Iso8601 string
            const date = moment(this.date)
            // Then, get the current date
            const now = moment()

            // Finally, get the difference between the two dates
            const diffInDays = Math.abs(date.diff(now, 'days'))

            this.weeks = Math.floor(diffInDays / 7);
            this.days = diffInDays % 7;
            if (this.countToday) {
                if (now >= date) {
                    this.days += 1;
                } else {
                    this.days -= 1;
                    if (this.days < 0) {
                        this.days = 6;
                        this.weeks -= 1;
                    }
                }
            }
            this.weeks = this.pad(this.weeks, 2);
            this.days = this.pad(this.days, 2);
        },
        pad(num, size) {
            num = num.toString();
            while (num.length < size) num = "0" + num;
            return num;
        }
    },
    mounted() {
        this.getDateDiff();
        // Run the function getDateDiff every second
        setInterval(() => {
            this.getDateDiff()
        }, 1000);
    },
    data() {
        return {
            weeks: '00',
            days: '00',
        }
    },
}
</script>

<style scoped>
.flip-counter {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
</style>
