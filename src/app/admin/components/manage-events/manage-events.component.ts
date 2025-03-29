import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-events',
  standalone: false,
  
  templateUrl: './manage-events.component.html',
  styleUrl: './manage-events.component.css'
})
export class ManageEventsComponent {

  drpBranchOptions = [
    {name : 'Male', value : 'Male'},
    {name : 'Female', value : 'Female'},
    {name : 'LGBTQIA++', value : 'Others'}
  ]

  drpBranchConfig = {
    displayKey: 'name', // Key to display in the dropdown
    search: true,       // Enable search functionality
    height: '200px',    // Set the height of the dropdown
    placeholder: 'Select an option', // Placeholder text
    clearSearchOnClose: true, // Clear search field when dropdown is closed
    moreText: 'more',  // Text for showing more items
    noResultsText: 'No results found', // Text to display when no results are found
    searchPlaceholder: 'Search...',// Placeholder for the search box
    multiple : true,
  };


  drpBranch_change(event : any)
  {

  }

}
