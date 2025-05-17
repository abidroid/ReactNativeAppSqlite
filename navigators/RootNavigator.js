import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddStudentScreen from "../screens/AddStudentScreen";
import StudentListScreen from "../screens/StudentListScreen";
import UpdateStudentScreen from "../screens/UpdateStudentScreen";



const Stack = createNativeStackNavigator();

const RootNavigator = () => {

    return (
        <Stack.Navigator initialRouteName="AddStudent">
            <Stack.Screen
            name="AddStudent"
            component={AddStudentScreen}
            />
            
            <Stack.Screen
            name="StudentList"
            component={StudentListScreen}
            />

            <Stack.Screen
            name="UpdateStudent"
            component={UpdateStudentScreen}
            />

        </Stack.Navigator>
    );
};

export default RootNavigator;