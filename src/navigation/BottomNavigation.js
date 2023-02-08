import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Additional from "../screens/Additional/Additional";
import Home from "../screens/Home/Home";
import Setting from "../screens/Setting/Setting";


const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const PlusTabButton = ({ children, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.plus_container}>
        <View style={[styles.plus_view]}>{children}</View>
      </TouchableOpacity>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen name="Dashboard" component={Home}
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={require("../assets/icons/home.png")}
            style={{
              width: 24,
              height: 24,
              tintColor: focused ? "#49A6FC" : "gray",
            }}
          />
        ),
      }}
    />
      <Tab.Screen
        name="Plus"
        component={Additional}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/icons/add.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
          tabBarButton: (props) => <PlusTabButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/icons/settings.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "#49A6FC" : "gray",
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  plus_container: {
    top: -20,
    justifyContent: "center",
    alignItems: "center",
  },
  plus_view: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#49A6FC",
  },
});

export default BottomNavigation;
