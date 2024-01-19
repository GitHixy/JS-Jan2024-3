import { usersData } from './main.js';

export function createNavbar() {

    const navbar = document.createElement('nav');
    navbar.className = 'navbar navbar-expand-lg navbar-light bg-light';

    const navbarBrand = document.createElement('a');
    navbarBrand.className = 'navbar-brand';
    navbarBrand.href = '#';
    navbarBrand.textContent = 'UserSearch.com';

    navbar.appendChild(navbarBrand);
    document.getElementById('navbar-container').appendChild(navbar);
};

export function createFilterOptions() {
    const filterContainer = document.createElement('div');
    filterContainer.className = 'my-3 text-center';

    const select = document.createElement('select');
    select.className = 'custom-select w-auto';
    select.setAttribute('id', 'dropdown-menu');
    ['Name', 'Username', 'Email'].forEach(optionText => {
        const option = document.createElement('option');
        option.value = optionText.toLowerCase();
        option.textContent = optionText;
        select.appendChild(option);
    });

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-control mt-2 text-center w-50 mx-auto';
    input.setAttribute('id', 'search-input');
    input.placeholder = 'Enter search text';

    filterContainer.appendChild(select);
    filterContainer.appendChild(input);
    document.getElementById('filter-container').appendChild(filterContainer);
};

export function createTable(users) {
    let container = document.getElementById('table-container');

    const table = document.createElement('table');
    table.className = 'table table-striped bg-dark text-white mt-5 text-center';

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['Name:', 'Username:', 'Email:', 'Phone:', 'Address:'].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    users.forEach(user => {
        const tr = document.createElement('tr');
        [user.name, user.username, user.email, user.phone, user.address.street + ', ' + user.address.city]
        .forEach(text => {
            const td = document.createElement('td');
            td.textContent = text;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    container.appendChild(table);
};

