
import { StyleSheet } from 'react-native';

export const appointmentStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F2F7',
  },

  screenTitle: {
    fontSize: 21,
    fontWeight: '700',
    color: '#3561F5',
  },

  headerTitle: {
    flex: 1,
    fontSize: 19,
    fontWeight: '600',
    color: '#3561F5',
  },

  backButton: {
    marginRight: 15,
  },

  tabs: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
    gap: 8,
  },

  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#E8EDFF',
  },

  activeTab: {
    backgroundColor: '#3561F5',
  },

  tabText: {
    color: '#3561F5',
    fontSize: 12,
    fontWeight: '600',
  },

  activeTabText: {
    color: '#FFFFFF',
  },

  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },

  appointmentCard: {
    backgroundColor: '#EEF1FF',
    borderRadius: 13,
    padding: 13,
    marginBottom: 15,
  },

  doctorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  avatar: {
    width: 57,
    height: 57,
    borderRadius: 30,
    backgroundColor: '#D5DEFF',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  avatarText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#3561F5',
  },

  doctorDetails: {
    flex: 1,
  },

  doctorName: {
    fontSize: 13,
    fontWeight: '700',
    color: '#3561F5',
  },

  specialty: {
    fontSize: 11,
    color: '#69748F',
    marginTop: 4,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  ratingText: {
    fontSize: 10,
    color: '#68748D',
    marginLeft: 3,
  },

  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 6,
    backgroundColor: '#FFFFFF',
    borderRadius: 9,
    padding: 9,
    marginBottom: 12,
  },

  dateText: {
    fontSize: 10,
    color: '#52628D',
    marginRight: 5,
  },

  cardButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },

  primaryButton: {
    flex: 1,
    height: 42,
    backgroundColor: '#3561F5',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },

  outlineButton: {
    flex: 1,
    height: 42,
    borderWidth: 1,
    borderColor: '#3561F5',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },

  outlineButtonText: {
    color: '#3561F5',
    fontSize: 12,
    fontWeight: '600',
  },

  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#3561F5',
    marginTop: 15,
  },

  emptyText: {
    fontSize: 13,
    color: '#8993AA',
    marginTop: 7,
    textAlign: 'center',
  },

  bottomNavigation: {
    height: 57,
    backgroundColor: '#3561F5',
    marginHorizontal: 20,
    marginBottom: 8,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  navItem: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },

  detailContent: {
    padding: 22,
    paddingBottom: 35,
  },

  detailDoctor: {
    alignItems: 'center',
    paddingVertical: 20,
  },

  detailDoctorName: {
    color: '#3561F5',
    fontSize: 17,
    fontWeight: '700',
    marginTop: 12,
  },

  separator: {
    height: 1,
    backgroundColor: '#DCE3FF',
    marginVertical: 20,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#3561F5',
    marginBottom: 15,
    marginTop: 15,
  },

  detailRow: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEF1FA',
  },

  detailLabel: {
    fontSize: 11,
    color: '#8993AA',
  },

  detailValue: {
    fontSize: 13,
    fontWeight: '600',
    color: '#293653',
    marginTop: 5,
  },

  problemText: {
    fontSize: 13,
    color: '#7E879B',
    lineHeight: 21,
  },

  fullButton: {
    height: 49,
    backgroundColor: '#3561F5',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },

  formContent: {
    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 30,
  },

  instructionText: {
    color: '#777F91',
    fontSize: 12,
    lineHeight: 20,
    marginBottom: 15,
  },

  reasonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    gap: 12,
  },

  reasonText: {
    fontSize: 13,
    color: '#424D65',
  },

  textArea: {
    minHeight: 140,
    borderRadius: 12,
    backgroundColor: '#EEF1FF',
    padding: 15,
    color: '#293653',
    fontSize: 13,
    borderWidth: 1,
    borderColor: '#E0E6FF',
  },

  secondaryButton: {
    height: 47,
    borderWidth: 1,
    borderColor: '#3561F5',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },

  secondaryButtonText: {
    color: '#3561F5',
    fontSize: 13,
    fontWeight: '600',
  },

  reviewContent: {
    paddingHorizontal: 22,
    paddingTop: 25,
    paddingBottom: 30,
  },

  reviewDoctor: {
    alignItems: 'center',
    marginBottom: 25,
  },

  reviewDoctorName: {
    color: '#3561F5',
    fontSize: 17,
    fontWeight: '700',
    marginTop: 12,
  },

  ratingStars: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 18,
  },

  reviewInput: {
    height: 150,
    borderRadius: 12,
    backgroundColor: '#EEF1FF',
    borderColor: '#E0E6FF',
    borderWidth: 1,
    padding: 15,
    fontSize: 13,
    color: '#293653',
  },
});
