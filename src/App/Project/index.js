import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Navbar } from "../../shared/components";
import { actions } from "../../shared/actions/dashboardActions";
import Board from "./Board";

const { SET_CURRENT_PROJECT } = actions;

const setCurrentProjectSideEffect = async (dispatch, currentProjects, id) => {
  const project = currentProjects.find(project => project.id === Number(id));

  await dispatch({ type: SET_CURRENT_PROJECT, payload: project });
};

const Project = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { currentProjects } = useSelector(state => state.dashboard);

  useEffect(() => {
    setCurrentProjectSideEffect(dispatch, currentProjects, params.id);
  }, [dispatch, currentProjects, params.id]);

  return (
    <Fragment>
      <Navbar />
      <Board />
    </Fragment>
  );
};

export default Project;