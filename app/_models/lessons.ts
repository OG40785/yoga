import db from '@/db'; 
import * as schema from '@/db/schema';
export type lesson = {
    id: number,
}


/* async function createLesson(lessonData) {
    const teacher = await db.select().from(user)
      .join(role, (r) => r.id.eq(user.role_id))
      .where(user.id.eq(lessonData.teacher_id))
      .and(role.name.eq('teacher'))
      .first();
  
    if (!teacher) {
      throw new Error('User is not a teacher');
    }
  
    // Если проверка пройдена, создаем запись
    await db.insert(lesson).values(lessonData);
  } */
  