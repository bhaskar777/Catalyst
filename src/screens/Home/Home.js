import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import RecentScans from "../../components/RecentScans/RecentScans";

const Home = () => {
  const options_data = [
    {id:"1", text:"Single Scan", icons:require("../../assets/icons/single_scan.png")},
    {id:"2", text:"Batch Scan", icons:require("../../assets/icons/batch_scan.png")},
    {id:"3", text:"Scan Text", icons:require("../../assets/icons/scan_text.png")},
  ]
  return (
    <LinearGradient colors={["#cbc8c8", "#fff"]} style={styles.container}>
      <SafeAreaView style={{ ...styles.container }}>
        <ScrollView>
          <View style={{ padding: 12 }}>
            <View style={styles.child_container}>
              <View>
                <Text style={styles.day_text}>Good Evening</Text>
                <Text style={{ color: "#9B9B9B" }}>Welcome Back</Text>
              </View>
              <Image
                source={require("../../assets/icons/Premium.png")}
                style={{ width: 54, height: 54 }}
              />
            </View>
            <TouchableOpacity>
            <Image
              source={require("../../assets/icons/PremiumBanner.png")}
              style={{ width: "100%" }}
              resizeMode="contain"
            />
            </TouchableOpacity>

            <View style={styles.search_container}>
              <Image
                source={require("../../assets/icons/search.png")}
                style={{ width: 20, height: 20, marginStart: 12 }}
              />
              <TextInput
                placeholder="Search through your scans"
                style={styles.text_input}
              />
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              {options_data.map((e,i)=>{
                return(
                  <TouchableOpacity style={[styles.textcontainer]} key={e.id} >
                  <Image
                    source={e.icons}
                    style={styles.image_icons}
                  />
                  <Text style={styles.image_text}>{e.text}</Text>
                </TouchableOpacity>
                )
              })}
            </View>
            
          </View>
          <RecentScans/>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  child_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  day_text: { fontWeight: "bold", fontSize: 27 },
  textcontainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  search_container: {
    backgroundColor: "#fff",
    borderRadius: 100,
    alignItems: "center",
    flexDirection: "row",
    padding: 6,
  },
  text_input: { flex: 1, padding: 6 },
  image_icons: { width: 34, height: 34 },
  image_text: { fontWeight: "bold", marginTop: 12 },
});
