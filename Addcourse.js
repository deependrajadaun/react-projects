import React, { Fragment } from "react";
import { FormGroup,Form,Input,Button } from "reactstrap";



const Addcourse=() => {
    return (
        <Fragment>
          <Form>
           <FormGroup>
               <label for='userId' >Course Id </label>
               <Input
                type="text"
                placeholder="Enter here"
                 name="userId"
                id="userId"
               />
           </FormGroup>
           <FormGroup>
               <label for="title">Course Title</label>
               <Input type="text" placeholder="Enter title here" id="title"/>
           </FormGroup>
           
           <FormGroup>
               <label for="description"> course description</label>
               <input type="textarea" placeholder="enter description here" id="description"/>
           </FormGroup>
           <container  ClassName="text-center">
               <Button color="success">add course</Button>
               <Button color="warning">Clear</Button>
           </container>
          </Form>

        </Fragment>
    );
};
export default Addcourse;

