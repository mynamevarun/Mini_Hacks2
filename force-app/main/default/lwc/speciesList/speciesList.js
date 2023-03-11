import { LightningElement, wire } from "lwc";
import getFilteredSpecies from "@salesforce/apex/SpeciesService.getFilteredSpecies";

export default class SpeciesList extends LightningElement {
  searchText = '';

  @wire(getFilteredSpecies, {searchText: '$searchText'})
  species;

  handleSearchTermChange({detail}) {
    if (detail.value && detail.value.length > 2) {
      this.searchText = detail.value;
    } else {
      this.searchText = '';
    }
  }
}
