export const createProject = (project) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Minhaz",
        authorLastName: "Miraz",
        authorId: 12345,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({
          type: "CREATE_PROJECT",
          project,
        });
      })
      .catch((err) => {
        dispatch({
          type: "CREATE_PROJECT_ERROR",
          err,
        });
      });
  };
};
