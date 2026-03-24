import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentStep: 1,
    formData: {
        primaryGoal: '',
        startDate: '',
        endDate: '',
        hoursPerDay: '',
        offDays: '',
        currentKnowledge: '',
        learningStyle: '',
        profession: '',
        priorityTopics: '',
    },
};

const studyPlannerSlice = createSlice({
    name: 'studyPlanner',
    initialState,
    reducers: {
        nextStep: (state) => {
            if (state.currentStep < 3) state.currentStep += 1;
        },
        prevStep: (state) => {
            if (state.currentStep > 1) state.currentStep -= 1;
        },
        updateFormData: (state, action) => {
            state.formData = { ...state.formData, ...action.payload };
        },
        resetForm: () => initialState,
    },
});

export const { nextStep, prevStep, updateFormData, resetForm } = studyPlannerSlice.actions;
export default studyPlannerSlice.reducer;
