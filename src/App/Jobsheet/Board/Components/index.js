import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Section, SectionName } from "./Styles";

import { dispatchers } from "../../../../shared/actions/dashboardActions";

const { fetchComponents } = dispatchers;

const fetchComponentsSideEffect = async (dispatch, id, setComponents) => {
  await dispatch(fetchComponents(id, setComponents));
};

const Components = () => {
  const [components, setComponents] = useState([]);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    fetchComponentsSideEffect(dispatch, params.id, setComponents);
  }, []);
  return (
    <Section>
      <SectionName>All Components</SectionName>
      <div style={{ marginRight: "2.5rem", marginBottom: "2.5rem" }}>
        <table>
          <thead>
            <tr>
            <th scope="col">Component</th>
              <th scope="col">RL Category</th>
              <th scope="col">RL Number</th>
              <th scope="col">Description</th>
              <th scope="col">Manufacturer</th>
              <th scope="col">Part Number</th>
              <th scope="col">Stock Code</th>
              <th scope="col">Electrical Address</th>
              <th scope="col">Component Application</th>
              <th scope="col">Reference Tag</th>
              <th scope="col">Settings</th>
              <th scope="col">Image</th>
              <th scope="col">Resources</th>
              <th scope="col">Cutsheet</th> 
              <th scope="col">Maintenance Video</th>
              <th scope="col">Stores Part #</th>
            </tr>
          </thead>
          <tbody>
            {!!components.length &&
              components.map(component => (
                <tr key={component.id}>
                  <td data-label="Component">{component.id}</td>
                  <td data-label="RL Category">{component.rlCategory}</td>
                  <td data-label="RL Number">{component.rlNumber}</td>
                  <td data-label="Description">{component.descriptions}</td>
                  <td data-label="Manufacturer">{component.manufacturer}</td>
                  <td data-label="Part Number">{component.partNumber}</td>
                  <td data-label="Stock Code">{component.stockCode}</td>
                  <td data-label="Electrical Address">{component.electricalAddress}</td>
                  <td data-label="Component Application">{component.componentAddress}</td>
                  <td data-label="Refrence Tag">{component.referenceTag}</td>
                  <td data-label="Settings">{component.settings}</td>
                  <td data-label="Image">{component.image}</td>
                  <td data-label="Resources">{component.resources}</td>
                  <td data-label="Cutsheet">{component.cutsheet}</td>
                  <td data-label="Maintence Video">{component.maintenceVideo}</td>
                  <td data-label="Stores Part #">{component.storesPartNumber}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
};

export default Components;
