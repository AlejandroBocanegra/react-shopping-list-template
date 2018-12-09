import React, { Component } from "react";

import SimpleText from "../../components/Ingredient/SimpleText";
import Checkbox from "../../components/Ingredient/Checkbox";
import DeleteLink from "../../components/Ingredient/DeleteLink";
import EditableLabel from "../../components/Ingredient/EditableLabel";
import EditLink from "../../components/Ingredient/EditLink";
import Id from "../../components/Ingredient/Id";
import Label from "../../components/Ingredient/Label";
import ListItem from "../../components/Ingredient/ListItem";
import Order from "../../components/Ingredient/Order";
import Selectbox from "../../components/Ingredient/Selectbox";
import Status from "../../components/Ingredient/Status";
import TextId from "../../components/Ingredient/TextId";
import Form1 from "../../components/Ingredient/Form/Form1";
import Form2 from "../../components/Ingredient/Form/Form2";
import Form3 from "../../components/Ingredient/Form/Form3";

import Title from "../../screens/Departments/Title";
import AutoComplete from "../../screens/Departments/AutoComplete";
import ListItemLink from "../../screens/Departments/ListItemLink";
import ListItemEdit from "../../screens/Departments/ListItemEdit";
import ListItemDelete from "../../screens/Departments/ListItemDelete";

import { DefaultList, List, TodaysDate } from "@groceristar/grocery-component";

class Examples extends Component {
  render() {
    var id = 12345;
    var id1 = 1234;
    return (
      <div>
        <h3>SimpleText</h3>
        <SimpleText>This is SimpleText</SimpleText>
        <hr />
        <h3>Checkbox</h3>
        <Checkbox>Check</Checkbox>
        <hr />
        <h3>DeleteLink</h3>
        <DeleteLink id={id} url={"/examples/delete/" + id}>
          Link
        </DeleteLink>
        <hr />
        <h3>EditableLabel</h3>
        <EditableLabel id="ok">This is label</EditableLabel>
        <hr />
        <h3>EditLink</h3>
        <EditLink id={id1} url={"/examples/edit/" + id1}>
          Link
        </EditLink>
        <hr />
        <h3>Id</h3>
        <Id />
        <hr />
        <h3>Label</h3>
        <Label>This is label</Label>
        <hr />
        <h3>ListItem</h3>
        <ListItem data={["First", "Second", "Thirld"]} />
        <hr />
        <h3>Order</h3>
        <Order data={["Fish", "Milk", "Apple"]} />
        <hr />
        <h3>Selectbox</h3>
        <Selectbox data={["Apple", "Rastberry", "12"]} />
        <hr />
        <h3>Status</h3>
        <Status />
        <hr />
        <h3>TextId</h3>
        <TextId id="233">This is text with id</TextId>
        <hr />
        <h3>Forms</h3>
        <h3>Form1</h3>
        <Form1 />
        <hr />
        <h3>Form2</h3>
        <Form2 />
        <hr />
        <h3>Form3</h3>
        <Form3 />
        <hr />
        <h3>List</h3>
        <TodaysDate />
      
      {/*<List items={["One", "Two", "Three", "Apple"]} renderItem={"Two"}/>
        <DefaultList items={["One", "Two", "Three", "Apple"]} renderItem={"One"}/>
      */}
      <DefaultList items={["One", "Two", "Three", "Apple"]} />
      
      
        <hr />
        <br />
        <br/><Title id="123">Title with id</Title>

        <Title>AutoComplete</Title>
        <AutoComplete data={["a", "aa", "aaa", "b", "bb", "c", "cc"]} />
        <hr />
        <Title>List Item with link</Title>
        <ListItemLink list={["one", "two", "three"]} />
        <hr />
        <Title>List Item Edit</Title>
        <ListItemEdit list={["one", "two", "three"]} />
        <hr />
        <Title>List Item Delete</Title>
        <ListItemDelete list={["one", "two", "three"]} />
        <hr />
      </div>
    );
  }
}

export default Examples;
