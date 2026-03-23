import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "@/assets/styles/styles";

interface Post {
  id: string;
  text: string;
  image: string;
}

export default function FeedScreen() {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);

  const handlePost = () => {
    if (!text || !imageUrl) return;

    const newPost: Post = {
      id: Date.now().toString(),
      text,
      image: imageUrl,
    };

    setPosts([newPost, ...posts]);
    setText("");
    setImageUrl("");
  };

  const renderItem = ({ item }: { item: Post }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.postImage} />

      <View style={styles.cardFooter}>
        <View style={styles.avatar} />
        <View style={styles.textContainer}>
          <Text style={styles.postText}>{item.text}</Text>
        </View>
        <View style={styles.actionButton} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header (usuário + input) */}
      <View style={styles.header}>
        <View style={styles.userRow}>
          <View style={styles.avatarSmall} />
          <Text style={styles.username}>user</Text>
        </View>

        <TextInput
          placeholder="No que está pensando?"
          value={text}
          onChangeText={setText}
          style={styles.mainInput}
          placeholderTextColor="#ccc"
        />

        <TextInput
          placeholder="URL da imagem"
          value={imageUrl}
          onChangeText={setImageUrl}
          style={styles.input}
        />

        <TouchableOpacity style={styles.publishButton} onPress={handlePost}>
          <Text style={styles.publishText}>Publicar</Text>
        </TouchableOpacity>

        {/* Botões rápidos */}
        <View style={styles.actionsRow}>
          <View style={styles.actionBox} />
          <View style={styles.actionBox} />
          <View style={styles.actionBox} />
          <View style={styles.actionBox} />
        </View>
      </View>

      {/* Feed */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}








// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   FlatList,
//   Image,
//   TouchableOpacity,
// } from "react-native";
// import styles from "@/assets/styles/styles";

// interface Post {
//   id: string;
//   text: string;
//   image: string;
// }

// export default function FeedScreen() {
//   const [text, setText] = useState<string>("");
//   const [imageUrl, setImageUrl] = useState<string>("");
//   const [posts, setPosts] = useState<Post[]>([]);

//   const handlePost = () => {
//     if (!text || !imageUrl) return;

//     const newPost: Post = {
//       id: Date.now().toString(),
//       text,
//       image: imageUrl,
//     };

//     setPosts([newPost, ...posts]);
//     setText("");
//     setImageUrl("");
//   };

//   const renderItem = ({ item }: { item: Post }) => (
//     <View style={styles.post}>
//       <Image source={{ uri: item.image }} style={styles.image} />
//       <Text style={styles.postText}>{item.text}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Criar Post */}
//       <View style={styles.inputContainer}>
//         <TextInput
//           placeholder="No que está pensando?"
//           value={text}
//           onChangeText={setText}
//           style={styles.input}
//         />

//         <TextInput
//           placeholder="URL da imagem"
//           value={imageUrl}
//           onChangeText={setImageUrl}
//           style={styles.input}
//         />

//         <TouchableOpacity style={styles.button} onPress={handlePost}>
//           <Text style={styles.buttonText}>Publicar</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Feed */}
//       <FlatList
//         data={posts}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         showsVerticalScrollIndicator={false}
//       />
//     </View>
//   );
// }