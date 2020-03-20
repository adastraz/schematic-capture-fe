import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Section, SectionName, ImgSel, PTag, StyledInput, StyledSubmit } from "./Styles";

import { dispatchers } from "../../../shared/actions/dashboardActions";

const { fetchComponents } = dispatchers;

const fetchComponentsSideEffect = async (dispatch, id, setComponents) => {
  await dispatch(fetchComponents(id, setComponents));
};

const Components = () => {
  const { register, getValues, setValue, handleSubmit, watch } = useForm();
  const [components, setComponents] = useState([]);
  const [isNew, setIsNew] = useState(false);
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    fetchComponentsSideEffect(dispatch, params.id, setComponents);
  }, []);

  useEffect(() => {
    const file = watch("jpg")
    if(file) {
      console.log({file})
      if(file.length>0){
        setValue("name", file[0].name)
      }
    } 
  }, [watch("jpg")])

  const toggle = () => setModal(!modal);


  const onSubmit = e => {
    console.log('hello there')
  }

  return (
    <Section>
      <SectionName>All Components</SectionName>
      <div style={{ marginRight: "2.5rem", marginBottom: "2.5rem" }}>
        <table>
          <thead>
            <tr>
              <th scope="col">Component</th>
              <th scope="col">Description</th>
              <th scope="col">Part Number</th>
              <th scope="col">Stock Code</th>
              <th scope="col">Select Image</th>
            </tr>
          </thead>
          <tbody>
            {!!components.length &&
              components.map(component => (
                <tr key={component.id}>
                  <td data-label="Component">{component.id}</td>
                  <td data-label="Description">{component.descriptions}</td>
                  <td data-label="Part Number">{component.partNumber}</td>
                  <td data-label="Stock Code">{component.stockCode}</td>
                  <td data-label="Select Image">
                    <Button color="danger" onClick={toggle}>Select Image</Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        
        <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle}>
          <ModalHeader toggle={toggle}><PTag>Select Image for Component</PTag></ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label
                type="button"
                htmlFor="jpg"
                onClick={() => setIsNew(true)}
              >
                <ImgSel>Import Image</ImgSel>
              </label>
              {/* <p hidden={getValues().name}></p> */}
              <label htmlFor="jpg">
                <input
                  hidden
                  id="jpg"
                  name="jpg"
                  multiple={false}
                  type="file"
                  accept=".jpg"
                  ref={register}
                />
              </label>
              <label htmlFor="selectcomp">
                <select 
                  name="selectcomp"
                  id="selectcomp"
                >
                  {components.map(name => (
                      <option value={name.id}>{name.id}</option>
                  ))}
                </select>
              </label>
              <label htmlFor="name">
                <StyledInput
                  id="name"
                  name="name"
                  placeholder="Image"
                  disabled={!isNew}
                  hidden={!isNew}
                  ref={register({ required: true })}
                />
              </label>
              <StyledSubmit type="submit" hidden={!getValues().name}>Submit</StyledSubmit>
          </form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>Exit</Button>
          </ModalFooter>
      </Modal>

      </div>
    </Section>
  );
};

export default Components;
