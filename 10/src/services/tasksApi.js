import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

// BEGIN (write your solution here)
export const tasksApi = createApi({
    reducerPath: "tasks",
    baseQuery: fetchBaseQuery({baseUrl: "/api/tasks"}),
    tagTypes: ["tasks"],
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => "",
            providesTags: [{type: "tasks", id: "LIST"}],
        }),
        addTask: builder.mutation({
            query: (task) => ({
                url: "",
                method: "POST",
                body: {
                    'text': task
                },
            }),
            invalidatesTags: [{type: "tasks", id: "LIST"}],
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{type: "tasks", id: "LIST"}],
        }),
    }),
});

export const {useGetTasksQuery, useAddTaskMutation, useDeleteTaskMutation} = tasksApi;
// END