import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
} from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";

const RecentScans = () => {
  return (
    <View style={{ marginTop: 24 }}>
      <Text style={{ fontWeight: "bold", fontSize: 20, marginStart: 16 }}>
        Recent Scans
      </Text>
      <FlatList
        data={[1, 1, 1, 1, 1]}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <ImageBackground
              source={require("../../assets/icons/image_bg.png")}
              style={styles.image_container}
              imageStyle={{ borderRadius: 12 }}
            >
              <LinearGradient
                style={styles.overlay}
                colors={["#0000", "#00000080"]}
              >
                <View
                  style={styles.day_container}
                >
                  <Text style={{color:'#fff', fontSize:12}} >2d Ago</Text>
                </View>
              </LinearGradient>
            </ImageBackground>
          );
        }}
      />
    </View>
  );
};

export default RecentScans;

const styles = StyleSheet.create({
    image_container:{
        width: 200,
        height: 200,
        marginStart: 16,
        marginTop: 12,
    },
    overlay:{
        width: "100%",
        height: "100%",
        borderRadius: 12,
        justifyContent: "flex-end",
    },
    day_container:{
        backgroundColor: "#49A6FC",
        paddingHorizontal: 12,
        paddingVertical: 6,
       flexDirection:'row',
       borderRadius:8,
       bottom:12,
       left:12,
       position:'absolute'
      }
});
