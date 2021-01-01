import React from "react";
import { connect } from "react-redux";
import Skeleton, { SkeletonTheme, SkeletonProps } from "react-loading-skeleton";
import { AppState } from "../../redux/types/types";


interface CustomSkeletonProps extends SkeletonProps {
  darkMode: boolean
}

const CustomSkeleton: React.FC<CustomSkeletonProps> = ({ width, height, darkMode, count, circle }) => {

  return (
    <SkeletonTheme color = {darkMode ? "#17191e" : ""} highlightColor = {darkMode ? "#fff" : ""}>
      <Skeleton width = {width} height = {height} count = {count} circle = {circle} duration = {2} />
    </SkeletonTheme>
  );
}

const mapStateToProps = (state: AppState) => ({
  darkMode: state.uiReducer.darkMode
});

export default connect(mapStateToProps)(CustomSkeleton);