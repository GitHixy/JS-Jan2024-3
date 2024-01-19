import * as component from "./components.js";
import * as helper from "./helper.js";

export let usersData = [];
async function fetchUsers() {
const url = 'https://jsonplaceholder.typicode.com/users';

try {
    const resp = await fetch(url);
    usersData = await resp.json();
    console.log(usersData);
    component.createTable(usersData);
    } catch (error) {
        console.error('Failed to fetch data', error);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    component.createNavbar();
    component.createFilterOptions();
    fetchUsers();
    helper.setupFiltering();
});



