import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { getKids, sortedKids } from "../api/Api";

const MainApp = () => {
  const [sortedState, setSortedState] = useState<Array<{}>>([]);
  const [state, setState] = useState<Array<{}>>([]);
  const [imageState, setImageState] = useState<any>([]);

  useEffect(() => {
    getKids().then((res) => {
      setState(res);
    });

    sortedKids().then((res) => {
      setSortedState(res);
    });

    sortedKids().then((res) => {
      setImageState(res);
    });
  }, []);

  const onDrag = (res: any) => {
    // console.log(res);
    const { source, destination } = res;

    let data = Array.from(state);
    let [newData] = data.splice(source.index, 1);
    data.splice(destination.index, 0, newData);
    console.log("this is", [newData]); // note

    setState(data);
  };

  // console.log(state);

  const pp = (tap: any) => {
    const { source, destination } = tap;

    const data = Array.from(state);
    let [newData] = data.splice(source.index, 1);
    data.splice(destination.index, 1, newData);
  };

  const test = () => {
    let data = ["pit", "pig", "fish"];
    let sp = data.splice(3);
    console.log(data);
  };
  console.log(test());

  return (
    <DragDropContext onDragEnd={onDrag}>
      <Container>
        <Main>
          <Droppable droppableId="jdj">
            {(props) => (
              <Holder {...props.droppableProps} ref={props.innerRef}>
                <Text>Word</Text>
                {state?.map((props: any, i: number) => (
                  <Draggable draggableId={props._id} key={props._id} index={i}>
                    {(prov) => (
                      <Box
                        {...prov.dragHandleProps}
                        {...prov.draggableProps}
                        ref={prov.innerRef}
                      >
                        {props.name}
                      </Box>
                    )}
                  </Draggable>
                ))}
                {props.placeholder}
              </Holder>
            )}
          </Droppable>
          <Holder>
            <Text>Image</Text>

            <FlexImage>
              {imageState?.map((props: any) => (
                <Image key={props._id} src={props.image} />
              ))}
            </FlexImage>
          </Holder>
        </Main>
      </Container>
    </DragDropContext>
  );
};

export default MainApp;

const FlexImage = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  height: 50px;
  border: 1px solid silver;
  border-radius: 5px;
  margin: 10px;
  object-fit: cover;
`;

const Box = styled.div`
  margin: 10px;
  border: 1px solid silver;
  padding: 0 10px;
  border-radius: 5px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div``;

const Holder = styled.div`
  margin: 10px 30px;
  border: 1px solid silver;
  padding: 10px;
  border-radius: 5px;
`;

const Main = styled.div`
  border: 1px solid silver;
  border-radius: 5px;
  padding: 20px 30px;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
`;
