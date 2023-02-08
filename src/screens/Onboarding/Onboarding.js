import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import { ExpandingDot } from "react-native-animated-pagination-dots";
import PagerView from "react-native-pager-view";

const Onboarding = ({navigation}) => {
  const width = Dimensions.get("window").width;
  const SLIDER_DATA = [
    {
      key: "1",
      title: "Scan anything in HD, wherever you are...",
      description:
        "Simply launch the AirScan app and scan any document, papers or real world photographs in seconds. ",
      images: require("../../assets/icons/bg3.png"),
    },
    {
      key: "2",
      title: "Navigate work documents like a Pro",
      description:
        "Scan and organize your work documents in structured folders. Scan single or multiple documents in one swift go. Merge scans into PDFs, reorder pages and share them on the fly.",
      images: require("../../assets/icons/bg2.png"),
    },
    {
      key: "3",
      title: "Less time scanning homework = more time for fun",
      description:
        "Scanning of homework and assignments are a breeze with AirScan. Capture scans, generate PDFs and push them to any app installed on your phone. Its that easy!",
      images: require("../../assets/icons/bg1.png"),
    },
    {
      key: "4",
      title: "ICovert Pictures to Text with our next generation offline OCR",
      description:
        "Leverage our cutting edge machine learning OCR to convert documents to text in seconds with accurate results. Share OCR scans as Doc files or PDFs in seconds",
      images: require("../../assets/icons/bg4.png"),
    },
  ];
  const scrollOffsetAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const positionAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const inputRange = [0, SLIDER_DATA.length];
  const scrollX = Animated.add(
    scrollOffsetAnimatedValue,
    positionAnimatedValue
  ).interpolate({
    inputRange,
    outputRange: [0, SLIDER_DATA.length * width],
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PagerView
        style={{ flex: 1 }}
        initialPage={0}
        onPageScroll={Animated.event(
          [
            {
              nativeEvent: {
                offset: scrollOffsetAnimatedValue,
                position: positionAnimatedValue,
              },
            },
          ],
          {
            useNativeDriver: false,
          }
        )}
      >
        {SLIDER_DATA.map((item, index) => {
          return (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
              key={item.key}
            >
              <Image
                source={item.images}
                style={{
                  width: 280,
                  height: 180,
                }}
                resizeMode="contain"
              />
              <View style={{ padding: 16, marginTop: 16 }}>
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 17,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {item.title}
                </Text>
                <Text
                style={{
                    alignSelf: "center",
                    fontSize: 14,
                    textAlign: "center",
                    margin:24
                  }}
                >{item.description}</Text>
              </View>

              {index == 3 && (
                <TouchableOpacity
                onPress={()=>{
                    navigation.navigate("Home")
                }}
                  style={{
                    backgroundColor: "#49A6FC",
                    padding: 16,
                    borderRadius: 100,
                    position: "absolute",
                    bottom: 20,
                    right: 80,
                  }}
                >
                  <Image
                    source={require("../../assets/icons/right_arrow.png")}
                    style={{ width: 24, height: 24 }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              )}
            </View>
          );
        })}
      </PagerView>
      <ExpandingDot
        data={SLIDER_DATA}
        expandingDotWidth={10}
        scrollX={scrollX}
        inActiveDotOpacity={1}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 100,
          marginHorizontal: 5,
        }}
        activeDotColor={"#49A6FC"}
        inActiveDotColor={"gray"}
        containerStyle={{
          bottom: 70,
        }}
      />

      
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({

});
