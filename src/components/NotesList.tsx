
import React from 'react';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { Note } from '@/types/Note';
import { cn } from '@/lib/utils';

interface NotesListProps {
  notes: Note[];
  selectedNote: Note | null;
  onNoteSelect: (note: Note) => void;
  onDeleteNote: (noteId: string) => void;
}

export const NotesList: React.FC<NotesListProps> = ({
  notes,
  selectedNote,
  onNoteSelect,
  onDeleteNote,
}) => {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const truncateContent = (content: string, maxLength: number = 100) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + '...';
  };

  if (notes.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        <p>No notes found</p>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-2">
      {notes.map((note) => (
        <div
          key={note.id}
          className={cn(
            "p-3 rounded-lg border cursor-pointer transition-all group hover:shadow-md",
            selectedNote?.id === note.id
              ? "bg-blue-50 border-blue-200 shadow-sm"
              : "bg-white border-gray-200 hover:bg-gray-50"
          )}
          onClick={() => onNoteSelect(note)}
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-medium text-gray-800 truncate flex-1">
              {note.title}
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onDeleteNote(note.id);
              }}
              className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 p-1 h-auto text-red-500 hover:text-red-700 hover:bg-red-50"
            >
              <Trash2 className="w-3 h-3" />
            </Button>
          </div>
          
          {note.content && (
            <p className="text-sm text-gray-600 mb-2">
              {truncateContent(note.content)}
            </p>
          )}
          
          <div className="flex justify-between items-center text-xs text-gray-400">
            <span className="capitalize bg-gray-100 px-2 py-1 rounded">
              {note.category}
            </span>
            <span>{formatDate(note.updatedAt)}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
