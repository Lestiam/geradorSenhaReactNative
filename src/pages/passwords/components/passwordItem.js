import React from "react";
import { View, StyleSheet, Text, Pressable, TouchableOpacity } from "react-native"
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'

export function PasswordItem({ data, removePassword }) {
    
        const [isEyeOpen, setIsEyeOpen] = useState(false);
        const [textColor, setTextColor] = useState('#fff');
      
        const toggleEye = () => {
          setIsEyeOpen(!isEyeOpen)
          setTextColor(isEyeOpen ? '#fff' : '#0e0e0e');
        }
    
    return (        
        <Pressable onLongPress={removePassword} style={styles.container}>
        <Ionicons style={[styles.icon, styles.text]} onPress={toggleEye}
                name={isEyeOpen ? 'eye-off' : 'eye'} size={32} color="white"
            />
            <Text style={{ color: textColor }}>{data}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0e0e0e",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    icon: {
        justifyContent: 'space-between'
        
    }
})