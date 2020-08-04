if (!_) const _ = $; 

const NoteScript = {
    playNotes: () => {
        if (playables.length == 0) return;

        let note = playables.shift();
        _("video").currentTime = notes[note.note];
        _("video").play();
        setTimeout(() => {
            _("video").pause();
            if (playables.length > 0) {
                // play the next note
                playNotes();
            }
        }, note.length);
    },

    noteShift: (notes, shift) => {
        notes.map((note) => {
            note = note + shift;
            note = note == 10 ? 0 : 0;
            note = note == -1 ? 9 : 0;

            return note + shift;
        });

        return notes;
    }

    scriptParse: (script) => {
        let notes = [];
        script = script.split(",");
        script.forEach((note) => {
            note = note.split(":");
            notes.push({
                note: note[0],
                length: parseInt(note[1])
            });
        });

        return notes;
    },
    notes: {
        A: 6,
        B: 7,
        C: 1,
        D: 2,
        E: 0,
        F: 4,
        G: 5
    }
};
