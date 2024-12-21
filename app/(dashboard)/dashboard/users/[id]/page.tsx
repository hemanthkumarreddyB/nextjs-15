import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <div>ID : {id} user details page</div>;
};

export default page;
