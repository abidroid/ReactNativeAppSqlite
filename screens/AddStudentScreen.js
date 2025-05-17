import React from "react";
import { ScrollView, TextInput, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const AddStudentScreen = ({navigation}) => {

    const [name, setName] = React.useState('');
    const [course, setCourse] = React.useState('');
    const [mobile, setMobile] = React.useState('');
    const [totalFee, setTotalFee] = React.useState('');
    const [feePaid, setFeePaid] = React.useState('');

    return (
        <ScrollView style={styles.container}>

            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />

            <TextInput
                style={styles.input}
                placeholder="Course"
                value={course}
                onChangeText={setCourse}
            />

            <TextInput
                style={styles.input}
                placeholder="Mobile"
                value={mobile}
                onChangeText={setMobile}
            />

            <TextInput
                style={styles.input}
                placeholder="Total Fee"
                value={totalFee}
                onChangeText={setTotalFee}
            />

            <TextInput
                style={styles.input}
                placeholder="Fee Paid"
                value={feePaid}
                onChangeText={setFeePaid}
            />

            <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.buttonText}>View All</Text>
            </TouchableOpacity>

        </ScrollView>
    );

};


const styles = StyleSheet.create({
    container: {flex: 1, padding: 16},
    input: {
        borderWidth: 1,
        padding: 8,
        marginVertical: 8,
        backgroundColor: 'white'
    },

    buttonStyle: {
        backgroundColor: 'green',
        padding: 8,
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 16,
    },

    buttonText: {
        color: 'white',
    }

});

export default AddStudentScreen;