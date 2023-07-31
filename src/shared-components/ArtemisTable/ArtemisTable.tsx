import { FC, useState } from 'react';
import {
    Button,
    DataList,
    DataListCheck,
    DataListItem,
    DataListItemRow,
    DataListCell,
    DataListItemCells,
    Toolbar,
    ToolbarContent,
    ToolbarItem,
    Modal,
    OptionsMenu,
    OptionsMenuToggle,
    Pagination,
    PaginationVariant,
    Text,
    TextContent,
    Select,
    SelectVariant,
    OptionsMenuItemGroup,
    OptionsMenuItem,
    OptionsMenuSeparator,
    SelectOption,
    SearchInput,
    SelectOptionObject
} from '@patternfly/react-core';
import { TableComposable, Thead, Tr, Th, Tbody, Td, IAction, ActionsColumn, SortByDirection } from '@patternfly/react-table';
import SortAmountDownIcon from '@patternfly/react-icons/dist/esm/icons/sort-amount-down-icon';


export type Column = {
    id: string
    name: string
    visible: boolean
    sortable: boolean
    filterable: boolean
}

export type ActiveSort = {
    id: string
    order: SortByDirection
}

export type Filter = {
    column: string
    operation: string
    input: string
}

export type ToolbarAction = {
    name: string
    action: Function
}

export type ArtemisTableProps = {

};

export const ArtemisTable: FC<ArtemisTableProps> = ({

}) => {
    return <></>;
};