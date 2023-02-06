import React from 'react'
import SkeletonLoader from "expo-skeleton-loader";
import { normalize } from '../../helper/utils';

const QuestionHomeItemSkeleton = () => {
  return (
    <SkeletonLoader  boneColor='#d3d3d3' highlightColor='gray' style={{ flexGrow : 0, height : 164}} >
      <SkeletonLoader.Item style={{height : 164, width: normalize(240), borderRadius : 12, marginRight : normalize(10)}} >
      </SkeletonLoader.Item>
    </SkeletonLoader>
  )
}

export default QuestionHomeItemSkeleton