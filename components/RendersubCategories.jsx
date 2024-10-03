import React from "react";
import { Image, Text, View } from "react-native";

export default function RendersubCategories({ subCategories }) {
  return (
    <View className="flex-row flex-wrap ">
      {subCategories.map((subCategory) => (
        <View
          key={subCategory.id}
          className="items-center mb-4"
          style={{ width: "22%", margin: "1%", backgroundColor: "b4f1ff" }}
        >
          <Image
            source={{
              uri: "https://img.freepik.com/premium-photo/assortment-tasty-vegetables-fruits-isolated-with-white-highlights_660230-36110.jpg?w=1060",
            }}
            className="w-20 h-24 rounded-lg"
          />
          <Text className="text-center text-sm mt-2">{subCategory.name}</Text>
        </View>
      ))}
    </View>
  );
}
