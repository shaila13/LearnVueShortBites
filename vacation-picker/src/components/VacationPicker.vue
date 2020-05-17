<template>
    <div>
        <h1>{{ title }}</h1>
        <ul class="list-group">
            <li v-for="country in data.countries"
                @click="showCountry(country)"
                :key="country.id"
                class="list-group-item">
                <span :id="country.id"
                      :title="country.details">
                    {{ country.id}} -
                    {{ country.name }}
                </span>
            </li>
        </ul>
        <h3>My counter: {{ counter }} </h3>
        <button @click="increment()" class="btn btn-success">+</button>
        <button @click="decrement()" class="btn btn-warning">-</button>
    </div>
</template>

<script>
    import data from '../data/data';

    export default {
        name: "VacationPicker",
        data() {
            return {
                data,
                title: 'Vue Vacation Picker',
                counter:0
            }
        },
        methods:{
            increment (){
                // a lot of calculations
                this.counter++;
            },
            decrement(){
                this.counter--;
            },
            showCountry(country){
                alert('You clicked on: ' + country.name );
            }
        }
    }
</script>

<style scoped>

</style>
