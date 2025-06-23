
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Save } from 'lucide-react';
import { Note } from '@/types/Note';
import { useToast } from '@/hooks/use-toast';

interface NoteEditorProps {
  note: Note;
  onUpdateNote: (note: Note) => void;
}

export const NoteEditor: React.FC<NoteEditorProps> = ({ note, onUpdateNote }) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [category, setCategory] = useState(note.category);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setTitle(note.title);
    setContent(note.content);
    setCategory(note.category);
    setHasUnsavedChanges(false);
  }, [note]);

  useEffect(() => {
    const hasChanges = title !== note.title || content !== note.content || category !== note.category;
    setHasUnsavedChanges(hasChanges);
  }, [title, content, category, note]);

  const handleSave = () => {
    const updatedNote: Note = {
      ...note,
      title: title || 'Untitled Note',
      content,
      category,
    };
    onUpdateNote(updatedNote);
    setHasUnsavedChanges(false);
    toast({
      title: "Note saved",
      description: "Your changes have been saved successfully.",
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      handleSave();
    }
  };

  return (
    <div className="flex-1 bg-white p-6" onKeyDown={handleKeyDown}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4 flex-1">
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-2xl font-bold border-none shadow-none p-0 focus-visible:ring-0"
              placeholder="Untitled Note"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General</SelectItem>
                <SelectItem value="work">Work</SelectItem>
                <SelectItem value="personal">Personal</SelectItem>
                <SelectItem value="ideas">Ideas</SelectItem>
                <SelectItem value="todo">To-do</SelectItem>
              </SelectContent>
            </Select>
            
            <Button
              onClick={handleSave}
              disabled={!hasUnsavedChanges}
              className="bg-green-600 hover:bg-green-700 text-white disabled:opacity-50"
            >
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
          </div>
        </div>

        <div className="mb-4 text-sm text-gray-500">
          Created: {new Date(note.createdAt).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
          {note.updatedAt > note.createdAt && (
            <span className="ml-4">
              Last updated: {new Date(note.updatedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </span>
          )}
        </div>

        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start writing your note..."
          className="min-h-[600px] resize-none border-none shadow-none p-0 focus-visible:ring-0 text-base leading-relaxed"
        />

        {hasUnsavedChanges && (
          <div className="fixed bottom-6 right-6 bg-yellow-100 border border-yellow-300 text-yellow-800 px-4 py-2 rounded-lg shadow-lg">
            <span className="text-sm">Unsaved changes • Press Ctrl+S to save</span>
          </div>
        )}
      </div>
    </div>
  );
};
