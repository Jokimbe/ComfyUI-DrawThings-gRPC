# automatically generated by the FlatBuffers compiler, do not modify

# namespace: 

import flatbuffers
from flatbuffers.compat import import_numpy
np = import_numpy()

class Control(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAs(cls, buf, offset=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = Control()
        x.Init(buf, n + offset)
        return x

    @classmethod
    def GetRootAsControl(cls, buf, offset=0):
        """This method is deprecated. Please switch to GetRootAs."""
        return cls.GetRootAs(buf, offset)
    # Control
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # Control
    def File(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # Control
    def Weight(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float32Flags, o + self._tab.Pos)
        return 1.0

    # Control
    def GuidanceStart(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float32Flags, o + self._tab.Pos)
        return 0.0

    # Control
    def GuidanceEnd(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float32Flags, o + self._tab.Pos)
        return 1.0

    # Control
    def NoPrompt(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(12))
        if o != 0:
            return bool(self._tab.Get(flatbuffers.number_types.BoolFlags, o + self._tab.Pos))
        return False

    # Control
    def GlobalAveragePooling(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(14))
        if o != 0:
            return bool(self._tab.Get(flatbuffers.number_types.BoolFlags, o + self._tab.Pos))
        return True

    # Control
    def DownSamplingRate(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(16))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float32Flags, o + self._tab.Pos)
        return 1.0

    # Control
    def ControlMode(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(18))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int8Flags, o + self._tab.Pos)
        return 0

    # Control
    def TargetBlocks(self, j):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(20))
        if o != 0:
            a = self._tab.Vector(o)
            return self._tab.String(a + flatbuffers.number_types.UOffsetTFlags.py_type(j * 4))
        return ""

    # Control
    def TargetBlocksLength(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(20))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0

    # Control
    def TargetBlocksIsNone(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(20))
        return o == 0

    # Control
    def InputOverride(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(22))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int8Flags, o + self._tab.Pos)
        return 0

def ControlStart(builder):
    builder.StartObject(10)

def Start(builder):
    ControlStart(builder)

def ControlAddFile(builder, file):
    builder.PrependUOffsetTRelativeSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(file), 0)

def AddFile(builder, file):
    ControlAddFile(builder, file)

def ControlAddWeight(builder, weight):
    builder.PrependFloat32Slot(1, weight, 1.0)

def AddWeight(builder, weight):
    ControlAddWeight(builder, weight)

def ControlAddGuidanceStart(builder, guidanceStart):
    builder.PrependFloat32Slot(2, guidanceStart, 0.0)

def AddGuidanceStart(builder, guidanceStart):
    ControlAddGuidanceStart(builder, guidanceStart)

def ControlAddGuidanceEnd(builder, guidanceEnd):
    builder.PrependFloat32Slot(3, guidanceEnd, 1.0)

def AddGuidanceEnd(builder, guidanceEnd):
    ControlAddGuidanceEnd(builder, guidanceEnd)

def ControlAddNoPrompt(builder, noPrompt):
    builder.PrependBoolSlot(4, noPrompt, 0)

def AddNoPrompt(builder, noPrompt):
    ControlAddNoPrompt(builder, noPrompt)

def ControlAddGlobalAveragePooling(builder, globalAveragePooling):
    builder.PrependBoolSlot(5, globalAveragePooling, 1)

def AddGlobalAveragePooling(builder, globalAveragePooling):
    ControlAddGlobalAveragePooling(builder, globalAveragePooling)

def ControlAddDownSamplingRate(builder, downSamplingRate):
    builder.PrependFloat32Slot(6, downSamplingRate, 1.0)

def AddDownSamplingRate(builder, downSamplingRate):
    ControlAddDownSamplingRate(builder, downSamplingRate)

def ControlAddControlMode(builder, controlMode):
    builder.PrependInt8Slot(7, controlMode, 0)

def AddControlMode(builder, controlMode):
    ControlAddControlMode(builder, controlMode)

def ControlAddTargetBlocks(builder, targetBlocks):
    builder.PrependUOffsetTRelativeSlot(8, flatbuffers.number_types.UOffsetTFlags.py_type(targetBlocks), 0)

def AddTargetBlocks(builder, targetBlocks):
    ControlAddTargetBlocks(builder, targetBlocks)

def ControlStartTargetBlocksVector(builder, numElems):
    return builder.StartVector(4, numElems, 4)

def StartTargetBlocksVector(builder, numElems):
    return ControlStartTargetBlocksVector(builder, numElems)

def ControlAddInputOverride(builder, inputOverride):
    builder.PrependInt8Slot(9, inputOverride, 0)

def AddInputOverride(builder, inputOverride):
    ControlAddInputOverride(builder, inputOverride)

def ControlEnd(builder):
    return builder.EndObject()

def End(builder):
    return ControlEnd(builder)

try:
    from typing import List
except:
    pass

class ControlT(object):

    # ControlT
    def __init__(self):
        self.file = None  # type: str
        self.weight = 1.0  # type: float
        self.guidanceStart = 0.0  # type: float
        self.guidanceEnd = 1.0  # type: float
        self.noPrompt = False  # type: bool
        self.globalAveragePooling = True  # type: bool
        self.downSamplingRate = 1.0  # type: float
        self.controlMode = 0  # type: int
        self.targetBlocks = None  # type: List[str]
        self.inputOverride = 0  # type: int

    @classmethod
    def InitFromBuf(cls, buf, pos):
        control = Control()
        control.Init(buf, pos)
        return cls.InitFromObj(control)

    @classmethod
    def InitFromPackedBuf(cls, buf, pos=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, pos)
        return cls.InitFromBuf(buf, pos+n)

    @classmethod
    def InitFromObj(cls, control):
        x = ControlT()
        x._UnPack(control)
        return x

    # ControlT
    def _UnPack(self, control):
        if control is None:
            return
        self.file = control.File()
        self.weight = control.Weight()
        self.guidanceStart = control.GuidanceStart()
        self.guidanceEnd = control.GuidanceEnd()
        self.noPrompt = control.NoPrompt()
        self.globalAveragePooling = control.GlobalAveragePooling()
        self.downSamplingRate = control.DownSamplingRate()
        self.controlMode = control.ControlMode()
        if not control.TargetBlocksIsNone():
            self.targetBlocks = []
            for i in range(control.TargetBlocksLength()):
                self.targetBlocks.append(control.TargetBlocks(i))
        self.inputOverride = control.InputOverride()

    # ControlT
    def Pack(self, builder):
        if self.file is not None:
            file = builder.CreateString(self.file)
        if self.targetBlocks is not None:
            targetBlockslist = []
            for i in range(len(self.targetBlocks)):
                targetBlockslist.append(builder.CreateString(self.targetBlocks[i]))
            ControlStartTargetBlocksVector(builder, len(self.targetBlocks))
            for i in reversed(range(len(self.targetBlocks))):
                builder.PrependUOffsetTRelative(targetBlockslist[i])
            targetBlocks = builder.EndVector()
        ControlStart(builder)
        if self.file is not None:
            ControlAddFile(builder, file)
        ControlAddWeight(builder, self.weight)
        ControlAddGuidanceStart(builder, self.guidanceStart)
        ControlAddGuidanceEnd(builder, self.guidanceEnd)
        ControlAddNoPrompt(builder, self.noPrompt)
        ControlAddGlobalAveragePooling(builder, self.globalAveragePooling)
        ControlAddDownSamplingRate(builder, self.downSamplingRate)
        ControlAddControlMode(builder, self.controlMode)
        if self.targetBlocks is not None:
            ControlAddTargetBlocks(builder, targetBlocks)
        ControlAddInputOverride(builder, self.inputOverride)
        control = ControlEnd(builder)
        return control
