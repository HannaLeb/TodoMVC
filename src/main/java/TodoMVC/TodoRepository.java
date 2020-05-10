package TodoMVC;

import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;

public interface TodoRepository extends JpaRepository<Todo,Long> {

    List<Todo> findByCompleted(boolean completed);

    @Transactional
    List<Todo> deleteByCompleted(boolean completed);
}
