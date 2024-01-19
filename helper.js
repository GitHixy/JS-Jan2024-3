import * as component from './components.js';
import { usersData } from './main.js';

export function setupFiltering() {
    const filterSelector = document.getElementById('dropdown-menu'); 
    const searchInput = document.getElementById('search-input'); 
    const loaderSpinner = document.getElementById('spinner-loader');
    function filterData() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm.length === 0) {
            alert('You must enter a valid search');
            return;
        }
        
        loaderSpinner.style.display = 'block';
        setTimeout(() => {
            const filterBy = filterSelector.value;
            const filteredData = usersData.filter(user =>
                user[filterBy].toLowerCase().includes(searchTerm)
            );

            const container = document.getElementById('table-container');
            container.innerHTML = ''; 

            
            loaderSpinner.style.display = 'none';

            if (filteredData.length > 0) {
                component.createTable(filteredData);
            } else {
                alert('No users found matching your search.');
            }
        }, 3000);
    }

    searchInput.addEventListener('change', filterData);
};

