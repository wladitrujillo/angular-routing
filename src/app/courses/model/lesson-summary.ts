export interface LessonSummary {
    id: number;
    description: string;
    duration: string;
    seqNo: number;
    courseId: number;
    videoId?: string;
    first?: boolean;
    last?: boolean;
}