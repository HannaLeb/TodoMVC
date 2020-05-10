package TodoMVC;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/todos")
public class TodoApi {
    private final TodoService service;

    @Autowired
    public TodoApi(TodoService stockService) {
        this.service = stockService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Todo>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @PostMapping("/add")
    public ResponseEntity addTodos(@Valid @RequestBody List<Todo> todos){
        return ResponseEntity.ok(service.addTodos(todos));
    }

    @PostMapping("/delete")
    public ResponseEntity deleteTodo(Long id) {
        service.deleteTodo(id);
        return ResponseEntity.ok("deleted");
    }

    @GetMapping("/completed")
    public ResponseEntity<List<Todo>> findCompleted() {
        return ResponseEntity.ok(service.findCompleted());
    }

    @GetMapping("/active")
    public ResponseEntity<List<Todo>> findActive() {
        return ResponseEntity.ok(service.findActive());
    }

    @PostMapping("/clear-completed")
    public ResponseEntity clearCompleted() {
        service.clearCompleted();
        return ResponseEntity.ok("cleared");
    }
}