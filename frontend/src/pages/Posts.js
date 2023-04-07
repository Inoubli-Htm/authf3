import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { FormControl, Button } from "react-bootstrap";

const Posts = () => {
  return (
    <div>
      <FormControl type="text" onChange={(e) => setText(e.target.value)} />
      <Button onClick={addPost}>add post</Button>
    </div>
  );
};

export default Posts;
