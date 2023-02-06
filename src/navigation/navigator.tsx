import { CommonActions, createNavigationContainerRef } from "@react-navigation/native";
import React from "react";

export const navigationRef = createNavigationContainerRef();


export function reset() {
    navigationRef.dispatch(
        state => CommonActions.reset({
          ...state,
          index: 0,
          routes: state.routes
        })
      );
}
