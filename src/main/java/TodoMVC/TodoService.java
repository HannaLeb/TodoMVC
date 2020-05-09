package TodoMVC;

import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TodoService {
    private final TodoRepository repository;

    public TodoService(TodoRepository repository) {
        this.repository = repository;
    }


    public List<Todo> findAll() {
        return repository.findAll();
    }

    public List<Todo> saveAll(List<Todo> todos) {
        return repository.saveAll(todos);
    }
}
