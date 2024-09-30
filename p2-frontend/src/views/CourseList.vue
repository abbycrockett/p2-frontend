<template>
    <div>
        <NavBar />
        <br>
        <h1>Course List</h1>
        <br>
        <div class="table-container">
            <table class="course-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Number</th>
                        <th>Level</th>
                        <th>Hours</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Programming I</td>
                        <td>CMSC</td>
                        <td>1234</td>
                        <td>01</td>
                        <td>3</td>
                        <td>
                            <div class="button-container">
                                <button type="button" class="update-button">UPDATE</button>
                                <button type="button" class="delete-button">DELETE</button>
                                <router-link to="/view-course">
                                    <button type="button" class="view-button">VIEW</button>
                                </router-link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
    components: {
        NavBar,
    },
};
</script>

<style scoped>
@import '@/assets/styles.css';

.table-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
</style>
  