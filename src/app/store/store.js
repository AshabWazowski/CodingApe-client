import { configureStore } from '@reduxjs/toolkit';
import studyPlannerReducer from './slices/studyPlannerSlice';

export const store = configureStore({
    reducer: {
        studyPlanner: studyPlannerReducer,
    },
});
