import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { RoomContext } from "../context";
import Loading from "./Loading";

function RoomsContainer() {
  return (
    <RoomContext.Consumer>
      {(value) => {
        const { loading, sortedRooms, rooms } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <div>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
          </div>
        );
      }}
    </RoomContext.Consumer>
  );
}

export default RoomsContainer;
