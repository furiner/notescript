var _ = $;
var playables = [];
var notes = {};

// setup notes
for (let i = 0; i <= 9; i++) {
    notes[i] = 24 * i;
}

const NoteScript = {
    playNote: playNote,
    
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
    },

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
    
    notes: notes,
    
    load: (note) => {
        // pre-load notes in video
        if (note > 9) return;
        if (!note) {
            note = 0;
            playNote(note, 500);
        } else playNote(note, 500);
        load(note + 1, 500);
        
        return true;
    }
};

function playNote(note, length) {
        _("video").currentTime = notes[not];
        _("video").play();
        setTimeout(() => {
            _("video").pause();
            if (playables.length > 0) {
                // play the next note
                playNotes();
            }
        }, length);
    }
