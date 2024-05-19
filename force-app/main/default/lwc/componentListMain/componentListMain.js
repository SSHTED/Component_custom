// componentListMain.js
import { LightningElement } from 'lwc';
import ComponentListHeader from 'c/componentListHeader';
import ComponentListFilter from 'c/componentListFilter';
import ComponentListTable from 'c/componentListTable';
import ComponentListTile from 'c/componentListTile';
import ComponentListModal from 'c/componentListModal';
import ComponentListData from 'c/componentListData';
import ComponentListAction from 'c/componentListAction';

export default class ComponentListMain extends LightningElement {
    data = [];
    columns = [];
    
    handleDataLoad() {
    }

    handleFilterChange() {
    }

    handleRowSelect() {
    }

    handleRowAction() {
    }

    handleTileSelect() {
    }

    handleTileAction() {
    }

    handleModalAction() {
    }
    
    handleAction(event) {
    }
}