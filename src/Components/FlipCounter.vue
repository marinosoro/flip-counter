<template>
    <div class="flip-counter">
        <FlipNumber
            v-if="parts.includes('years') && parseInt(years) > 0"
            :value="years"
            :speed="600"
            :label="labels.years || 'Years'"
            :fontSize="fontSize"
            :labelSize="labelSize"
        />
        <FlipNumber
            v-if="parts.includes('months') && parseInt(months) > 0"
            :value="months"
            :speed="600"
            :label="labels.months || 'Months'"
            :fontSize="fontSize"
            :labelSize="labelSize"
        />
        <FlipNumber
            v-if="parts.includes('days')"
            :value="days"
            :speed="600"
            :label="labels.days || 'Days'"
            :fontSize="fontSize"
            :labelSize="labelSize"
        />
        <FlipNumber
            v-if="parts.includes('hours')"
            :value="hours"
            :speed="600"
            :label="labels.hours || 'Hours'"
            :fontSize="fontSize"
            :labelSize="labelSize"
        />
        <FlipNumber
            v-if="parts.includes('minutes')"
            :value="minutes"
            :speed="600"
            :label="labels.minutes || 'Minutes'"
            :fontSize="fontSize"
            :labelSize="labelSize"
        />
        <FlipNumber
            v-if="parts.includes('seconds')"
            :value="seconds"
            :speed="600"
            :label="labels.seconds || 'Seconds'"
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
                    years: 'Years',
                    months: 'Months',
                    days: 'Days',
                    hours: 'Hours',
                    minutes: 'Minutes',
                    seconds: 'Seconds',
                }
            }
        },
        parts: {
            type: Array,
            default: () => {
                return ['years', 'months', 'days', 'hours', 'minutes', 'seconds']
            }
        }
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
            const preciseDiff = moment.preciseDiff(date, now, true);

            this.years = this.pad(preciseDiff.years, 2);
            this.months = this.pad(preciseDiff.months, 2);
            this.days = this.pad(preciseDiff.days, 2);
            this.hours = this.pad(preciseDiff.hours, 2);
            this.minutes = this.pad(preciseDiff.minutes, 2);
            this.seconds = this.pad(preciseDiff.seconds, 2);
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
            years: '00',
            months: '00',
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00',
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
