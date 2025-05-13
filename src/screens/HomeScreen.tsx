import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import Todo from '../components/Todo';
import TodoInput from '../components/TodoInput';
import {RootState} from '../store';
import {addTodo, deleteTodo} from '../store/todoSlice';

const HomeScreen: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (text: string) => {
    dispatch(addTodo(text));
  };

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={styles.content}>
        <TodoInput onAdd={handleAddTodo} />
        <FlatList
          data={todos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Todo
              id={item.id}
              text={item.text}
              onDelete={handleDeleteTodo}
            />
          )}
          style={styles.list}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 20, // 为底部添加额外的padding
  },
});

export default HomeScreen;
