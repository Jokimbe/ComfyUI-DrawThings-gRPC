# automatically generated by the FlatBuffers compiler, do not modify

# namespace: 

import flatbuffers
from flatbuffers.compat import import_numpy
from typing import Any
from typing import Optional
np = import_numpy()

class LoRA(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAs(cls, buf, offset: int = 0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = LoRA()
        x.Init(buf, n + offset)
        return x

    @classmethod
    def GetRootAsLoRA(cls, buf, offset=0):
        """This method is deprecated. Please switch to GetRootAs."""
        return cls.GetRootAs(buf, offset)
    # LoRA
    def Init(self, buf: bytes, pos: int):
        self._tab = flatbuffers.table.Table(buf, pos)

    # LoRA
    def File(self) -> Optional[str]:
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # LoRA
    def Weight(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float32Flags, o + self._tab.Pos)
        return 0.6

def LoRAStart(builder: flatbuffers.Builder):
    builder.StartObject(2)

def Start(builder: flatbuffers.Builder):
    LoRAStart(builder)

def LoRAAddFile(builder: flatbuffers.Builder, file: int):
    builder.PrependUOffsetTRelativeSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(file), 0)

def AddFile(builder: flatbuffers.Builder, file: int):
    LoRAAddFile(builder, file)

def LoRAAddWeight(builder: flatbuffers.Builder, weight: float):
    builder.PrependFloat32Slot(1, weight, 0.6)

def AddWeight(builder: flatbuffers.Builder, weight: float):
    LoRAAddWeight(builder, weight)

def LoRAEnd(builder: flatbuffers.Builder) -> int:
    return builder.EndObject()

def End(builder: flatbuffers.Builder) -> int:
    return LoRAEnd(builder)
