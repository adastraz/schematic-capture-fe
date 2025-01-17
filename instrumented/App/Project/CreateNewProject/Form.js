import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { dispatchers } from "../../../shared/actions/dashboardActions";

import { Button, StyledField } from "../../Auth/Styles";

import { InviteGroup } from "../../../shared/components/Styles/Invite-Styles";

import { Container, Form, Text } from "./Styles";

const { addNewProject } = dispatchers;

const CreateNewProject = () => {
  const { handleSubmit, register, errors } = useForm();
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const onAddNewProject = data => {
    dispatch(addNewProject(data, params.id, history));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onAddNewProject)}>
        <Text>Please enter the project name below:</Text>
        <InviteGroup>
          {/*<form onSubmit={handleSubmit(onAddNewProject)}>*/}
          {/*  <StyledFields fields={schema} register={register} errors={errors} />*/}
          {/*  <button type="submit">Save</button>*/}
          {/*  <Link to={`/client/${params.id}`}>Cancel</Link>*/}
          {/*</form>*/}
          <StyledField
            type="string"
            name="name"
            id="name"
            placeholder="Project Name"
            aria-label="Project Name"
            ref={register({ required: true })}
          />
        </InviteGroup>
        <InviteGroup>
          <Button variant="primary" submit="button" btnBlock>
            Create
          </Button>
        </InviteGroup>
      </Form>
    </Container>
  );
};

export default CreateNewProject;
